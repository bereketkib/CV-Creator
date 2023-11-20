import '../styles/education.css';

const Education = ({ data, setData, remove }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div className="education">
      <h2>Educational Experience</h2>
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
        <button onClick={remove}>Remove</button>
      </div>
    </div>
  );
};

export default Education;
