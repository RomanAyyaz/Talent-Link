import { useEffect, useRef, useState } from "react";
import { Formik, Form, Field } from "formik";
import io from "socket.io-client";
import { useUserStore } from "../../../Store/UserStore";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getMessageOfCompanyAndUser } from "./MessageApi";
const socket = io("http://localhost:8000");
const UserMessage = ({ receiverId , receiverType = "company" }) => {
  const { user} = useUserStore();
  const {id} = useParams()
  receiverId = id
  const senderId = user._id;
  const senderType = "user";

  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);
  //Api Calling for getting all the resumes 
  const { data, isLoading, error } = useQuery({
    queryKey: ["messages",user._id],
    queryFn: () => getMessageOfCompanyAndUser({id:user._id , companyId: id}),
  });
  if(isLoading) {
    <h1>Loading....</h1>
  }
  if(error) {
    <h2>error</h2>
  }
const messageData = data
console.log('Message data is ',messageData)
useEffect(() => {
    const handleReceiveMessage = (msg) => {
      const isRelevant =
        (msg.senderId === senderId && msg.receiverId === receiverId) ||
        (msg.senderId === receiverId && msg.receiverId === senderId);
  
      if (isRelevant) {
        setMessages((prev) => {
          const updated = [...prev, msg];
          return updated.sort(
            (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
          );
        });
      }
    };
  
    socket.on("receiveMessage", handleReceiveMessage);
  
    return () => {
      socket.off("receiveMessage", handleReceiveMessage);
    };
  }, [senderId, receiverId]);
  

  useEffect(() => {
  if (messageData && Array.isArray(messageData)) {
    const sorted = [...messageData].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
    setMessages(sorted);
  }
}, [messageData]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="w-full max-w-xl mx-auto mt-10 p-4 border rounded shadow">
      <div className="h-96 overflow-y-auto border-b mb-4 p-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded mb-2 max-w-xs ${
              msg.senderId === senderId ? "bg-green-500 text-white ml-auto" : "bg-gray-200 text-black mr-auto"
            }`}
          >
            {msg.message}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <Formik
        initialValues={{ message: "" }}
        onSubmit={(values, { resetForm }) => {
          const trimmed = values.message.trim();
          if (trimmed) {
            socket.emit("sendMessage", {
              senderType,
              senderId,
              receiverType,
              receiverId,
              message: trimmed,
            });
            resetForm();
          }
        }}
      >
        <Form className="flex gap-2">
          <Field
            name="message"
            placeholder="Type your message..."
            className="flex-1 border p-2 rounded"
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default UserMessage;
