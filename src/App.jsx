import { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import PracticalExperience from './components/PracticalExperience';
import './App.css';

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [education, setEducation] = useState({
    schoolName: '',
    studyTitle: '',
    dateOfStudy: '',
  });

  const [practicalExp, setPracticalExp] = useState({
    companyName: '',
    positionTitle: '',
    responsibilities: '',
    fromDate: '',
    toDate: '',
  });

  const [editMode, setEditMode] = useState(false);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSubmit = () => {
    setEditMode(false);
    // Perform submission actions here
    // You can send the data to a server or handle it as needed
  };

  return (
    <div className="App">
      <h1>CV Application</h1>
      <GeneralInfo
        data={generalInfo}
        setData={setGeneralInfo}
        editMode={editMode}
      />
      <Education data={education} setData={setEducation} editMode={editMode} />
      <PracticalExperience
        data={practicalExp}
        setData={setPracticalExp}
        editMode={editMode}
      />
      {editMode ? (
        <button onClick={handleSubmit}>Submit</button>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
    </div>
  );
}

export default App;
