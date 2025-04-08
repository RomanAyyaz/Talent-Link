const Company = require('../../Models/CompanyModels/Company')
const bcrypt = require('bcryptjs');
const changePassword = async (req,res)=>{
    const {id} = req.params
    const {password , newPassword} = req.body
    try {
        const company = await Company.findById(id);
        if (!company) {
            return res.status(404).json({ message: "Company not found" });
        }

        const isMatch = await bcrypt.compare(password, company.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Current password is incorrect" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

      
        company.password = hashedPassword;
        await company.save();

        res.status(200).json({ message: "Password changed successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
}

module.exports = {
    changePassword
}