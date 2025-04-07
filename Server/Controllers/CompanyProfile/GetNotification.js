const Notification = require('../../Models/NotificationModel/Notification')


const getNotification = async(req,res)=>{
    try {
        const {id} = req.params; 
    console.log(id)
        const notifications = await Notification.find({ recipientId: id })
          .sort({ createdAt: -1 });
          console.log(notifications)
        res.status(200).json({notifications});
      } catch (err) {
        res.status(500).json({ message: 'Error fetching notifications.' });
      }
}

module.exports = {
    getNotification
}