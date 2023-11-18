import '../styles/practical.css';

const PracticalExperience = ({ data, setData, editMode }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div className="practical-experience">
      <h2>Practical Experience</h2>
      {editMode ? (
        <div>
          <input
            type="text"
            name="companyName"
            value={data.companyName}
            onChange={handleChange}
            placeholder="Company Name"
          />
          <input
            type="text"
            name="positionTitle"
            value={data.positionTitle}
            onChange={handleChange}
            placeholder="Position Title"
          />
          <textarea
            name="responsibilities"
            value={data.responsibilities}
            onChange={handleChange}
            placeholder="Main Responsibilities"
          ></textarea>
          <input
            type="text"
            name="fromDate"
            value={data.fromDate}
            onChange={handleChange}
            placeholder="From Date"
          />
          <input
            type="text"
            name="toDate"
            value={data.toDate}
            onChange={handleChange}
            placeholder="To Date"
          />
        </div>
      ) : (
        <div>
          <p>Company: {data.companyName}</p>
          <p>Position: {data.positionTitle}</p>
          <p>Responsibilities: {data.responsibilities}</p>
          <p>From: {data.fromDate}</p>
          <p>To: {data.toDate}</p>
        </div>
      )}
    </div>
  );
};

export default PracticalExperience;
