
const Message = require('../../Models/MessageSchema/MessageSchema')

// Get chat history between user and company
const getMessagesBetweenUserAndCompany = async (req, res) => {
  try {
    const { userId, companyId } = req.params;

    const messages = await Message.find({
      $or: [
        { senderId: userId, receiverId: companyId },
        { senderId: companyId, receiverId: userId }
      ]
    }).sort({ createdAt: 1 }); // sort oldest to newest

    res.status(200).json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ message: "Failed to retrieve messages" });
  }
};

module.exports = {
  getMessagesBetweenUserAndCompany,
};
