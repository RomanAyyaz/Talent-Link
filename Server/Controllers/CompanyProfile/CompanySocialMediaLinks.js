const Company = require('../../Models/CompanyModels/Company')

const socialMediaLinks = async (req,res)=>{
    const {  facebook , twitter , instagram , websiteUrl} = req.body;
    const {id} = req.params;
    try {
        const companyInformation = await Company.findByIdAndUpdate(
          id ,{
            socialMediaLinks:{
                facebook, twitter , instagram , websiteUrl
            }
        },
        { new: true });
    
        await companyInformation.save();
        return res.status(201).json({ message: 'Social Media Links has been added' });
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
    };

module.exports ={
    socialMediaLinks
}