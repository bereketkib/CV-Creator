import { useState } from 'react';
import GeneralInfo from './GeneralInfo.jsx';
import Education from './Education.jsx';
import PracticalExperience from './PracticalExperience.jsx';
import '../styles/CVForm.css';

const CVForm = () => {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [educationList, setEducationList] = useState([]);
  const [practicalExpList, setPracticalExpList] = useState([]);

  const addEducation = () => {
    setEducationList([...educationList, { schoolName: '', studyTitle: '', dateOfStudy: '' }]);
  };

  const removeEducation = (index) => {
    const updatedList = [...educationList];
    updatedList.splice(index, 1);
    setEducationList(updatedList);
  };

  const addPracticalExperience = () => {
    setPracticalExpList([...practicalExpList, { companyName: '', positionTitle: '', responsibilities: '', fromDate: '', toDate: '' }]);
  };

  const removePracticalExperience = (index) => {
    const updatedList = [...practicalExpList];
    updatedList.splice(index, 1);
    setPracticalExpList(updatedList);
  };

  const [formattedContent, setFormattedContent] = useState('');

  const formatCV = () => {
    let formattedCV = '';

    // Format General Information as HTML elements
    formattedCV += `<h1 class='name'> ${generalInfo.name}</h1>\n`;
    formattedCV += `<div class='address'><p class='email'>Email: ${generalInfo.email}</p>\n`;
    formattedCV += `<p class='phone'>Phone: ${generalInfo.phone}</p></div>\n\n`;

    // Format Education
    formattedCV += `<div class='educate'><h2>Education</h2>\n`;
    educationList.forEach((edu) => {
      formattedCV += `<div class='article'><p class='school'> -${edu.schoolName}</p> <div class='studate'><p>Field: ${edu.studyTitle}</p> <p>Date: ${edu.dateOfStudy}</p></div></div></div>\n`;
    });
    formattedCV += '\n';

    // Format Practical Experience
    formattedCV += `<div class='practice'><h2>Practical Experience</h2>\n`;
    practicalExpList.forEach((exp) => {
      formattedCV += `<div class='article second'><p class='school'>- ${exp.positionTitle}</p><div class='studate'><p>Company: ${exp.companyName}</p> <p>Date: ${exp.fromDate} - ${exp.toDate}</p></div></div>\n`;
      formattedCV += `<p class='respond'>Responsibilities: ${exp.responsibilities}</p></div>\n\n`;
    });

    setFormattedContent(formattedCV);
  };

  const handleSubmit = () => {
    formatCV();
    // Other submission logic
  };

  return (
    <div className="cv-form">
      <div className="form-inputs">
        <GeneralInfo data={generalInfo} setData={setGeneralInfo} />
        {educationList.map((education, index) => (
          <Education
            key={index}
            data={education}
            setData={(newData) => {
              const updatedList = [...educationList];
              updatedList[index] = newData;
              setEducationList(updatedList);
            }}
            remove={() => removeEducation(index)}
          />
        ))}
        <button onClick={addEducation}>Add Education</button>
        {practicalExpList.map((practicalExp, index) => (
          <PracticalExperience
            key={index}
            data={practicalExp}
            setData={(newData) => {
              const updatedList = [...practicalExpList];
              updatedList[index] = newData;
              setPracticalExpList(updatedList);
            }}
            remove={() => removePracticalExperience(index)}
          />
        ))}
        <button onClick={addPracticalExperience}>Add Practical Experience</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className="cv-view">
        <h2 className='title'>Formatted CV</h2>
        <div className='content' dangerouslySetInnerHTML={{ __html: formattedContent }} />
      </div>
    </div>
  );
};

export default CVForm;
