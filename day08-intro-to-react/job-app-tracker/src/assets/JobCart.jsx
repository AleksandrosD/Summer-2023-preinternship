


function JobCard(job){
    return(<div className="j-desc">
    <img
    className="j-desc__company-image"
  />
  <div className="j-desc__details">
    <h2 className="j-desc__job-title">
      
    </h2>
    <p className="j-desc__company"></p>
    <ul className="j-desc__metadata">
      <li className="j-desc__location"></li>
      <li className="j-desc__salary"></li>
      <li className="j-desc__posting_date"></li>
    </ul>
  </div>
  </div>
  );
}
export default JobCard;