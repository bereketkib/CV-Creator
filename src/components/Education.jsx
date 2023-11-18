import '../styles/education.css';

const Education = ({ data, setData, editMode }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div className="education">
      <h2>Educational Experience</h2>
      {editMode ? (
        <div>
          <input
            type="text"
            name="schoolName"
            value={data.schoolName}
            onChange={handleChange}
            placeholder="School Name"
          />
          <input
            type="text"
            name="studyTitle"
            value={data.studyTitle}
            onChange={handleChange}
            placeholder="Title of Study"
          />
          <input
            type="text"
            name="dateOfStudy"
            value={data.dateOfStudy}
            onChange={handleChange}
            placeholder="Date of Study"
          />
        </div>
      ) : (
        <div>
          <p>School: {data.schoolName}</p>
          <p>Study Title: {data.studyTitle}</p>
          <p>Date of Study: {data.dateOfStudy}</p>
        </div>
      )}
    </div>
  );
};

export default Education;
