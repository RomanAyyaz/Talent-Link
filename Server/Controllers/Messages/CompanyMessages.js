const Company = require('../../Models/CompanyModels/Company')
const Message = require('../../Models/MessageSchema/MessageSchema')
const mongoose = require("mongoose");

const getCompanyMessageSummaries = async (req, res) => {
  const userId = req.params.userId;

  try {
    const messages = await Message.aggregate([
      {
        $match: {
          receiverId: new mongoose.Types.ObjectId(userId)
        }
      },
      {
        $sort: { createdAt: -1 }
      },
      {
        $group: {
          _id: "$senderId",
          lastMessage: { $first: "$text" },
          timestamp: { $first: "$createdAt" },
          unreadCount: {
            $sum: {
              $cond: [{ $eq: ["$isRead", false] }, 1, 0]
            }
          }
        }
      },
      {
        $lookup: {
          from: "companies", 
          localField: "_id",
          foreignField: "_id",
          as: "companyInfo"
        }
      },
      {
        $unwind: "$companyInfo"
      },
      {
        $project: {
          companyId: "$_id",
          companyName: "$companyInfo.companyName",
          companyLogo: "$companyInfo.companyLogo",
          lastMessage: 1,
          timestamp: 1,
          unreadCount: 1
        }
      },
      {
        $sort: { timestamp: -1 }
      }
    ]);

    res.status(200).json(messages);
  } catch (error) {
    console.error("Error fetching company message summaries:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { getCompanyMessageSummaries };
