const Company = require('../../Models/CompanyModels/Company');
const bcrypt = require('bcryptjs');

const deleteCompany = async (req, res) => {
  const { id } = req.params;
  const { password } = req.body
  try {
   
    const company = await Company.findById(id);
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }

    console.log(company)
    const isMatch = await bcrypt.compare(password, company.password); 
    if (!isMatch) {
      return res.status(401).json({ message: 'Incorrect password' });
    }
    
    await Company.findByIdAndDelete(id);

    res.status(200).json({ message: 'Company deleted successfully' });
  } catch (error) {
    console.error('Error deleting company:',);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  deleteCompany
};
