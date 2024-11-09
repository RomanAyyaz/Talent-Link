const Company = require('../../Models/CompanyModels/Company')

const companyRepresentatives = async(req,res)=>{
    const {id} = req.params
    const {name,email,role} = req.body
    try {
        const companyInformation = await Company.findByIdAndUpdate(
            id ,{
             $push:{reprsentative:{name,email,role}}
          },
          { new: true });
          await companyInformation.save();
          return res.status(201).json({ message: 'Representative has been added successfully' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    companyRepresentatives
}