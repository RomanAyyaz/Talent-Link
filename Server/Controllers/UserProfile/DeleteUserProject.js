const User = require('../../Models/UserModels/User')
let deleteUserProject = async (req, res) => {
    try {
        const { userId, projectId } = req.params;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.projects = user.projects.filter(p => p._id.toString() !== projectId);

        await user.save();
        console.log(user)
        return res.status(200).json({ message: 'Project deleted successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error', error });
    }
};



module.exports = {
    deleteUserProject
}