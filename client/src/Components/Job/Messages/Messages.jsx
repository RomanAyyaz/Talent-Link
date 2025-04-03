import { useEffect, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Formik, Form, Field } from "formik";
import { Send, User } from "react-feather";
import axios from "axios";

const fetchMessages = async () => {
  const { data } = await axios.get("/api/messages");
  return data;
};

const sendMessageApi = async (message) => {
  const { data } = await axios.post("/api/messages", { text: message });
  return data;
};

const Messages = () => {
  const queryClient = useQueryClient();
  const messagesEndRef = useRef(null);

  // Fetch messages
  const { data: messages = [], isLoading } = useQuery({
    queryKey: ["messages"],
    queryFn: fetchMessages,
  });

  // Mutation for sending messages
  const mutation = useMutation({
    mutationFn: sendMessageApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["messages"]); // Refetch messages after sending
    },
  });

  // // Auto-scroll to latest message
  // useEffect(() => {
  //   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [messages]);

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Chat Header */}
      <div className="bg-indigo-600 text-white px-4 py-3 flex items-center">
        <User className="h-5 w-5 mr-2" />
        <h2 className="text-lg font-semibold">Chat</h2>
      </div>

      {/* Chat Messages */}
      <div className="p-4 space-y-4 h-80 overflow-y-auto">
        {isLoading ? (
          <p>Loading messages...</p>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`p-3 rounded-lg text-sm max-w-xs ${
                  msg.sender === "me"
                    ? "bg-indigo-500 text-white"
                    : "bg-gray-200 text-gray-900"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef}></div>
      </div>

      {/* Message Input */}
      <Formik
        initialValues={{ message: "" }}
        onSubmit={(values, { resetForm }) => {
          if (values.message.trim()) {
            mutation.mutate(values.message);
            resetForm();
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="p-3 border-t flex">
            <Field
              name="message"
              type="text"
              className="flex-1 p-2 border rounded-l-lg focus:outline-none"
              placeholder="Type a message..."
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg flex items-center"
              disabled={isSubmitting}
            >
              <Send className="h-5 w-5" />
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Messages;
