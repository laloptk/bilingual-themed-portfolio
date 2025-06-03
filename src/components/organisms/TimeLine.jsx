import Card from "../molecules/Card";

const Timeline = ({jobs}) => {
  return (
    <div className="timeline">
      {jobs.map((job) => (
        <div key={job.id} className="timeline-card">
            <div className="timeline-years">
                <p>
                    {`${job.startYear} - ${job.endYear}`}
                </p>
            </div>
            <Card key={job.id} post={job} type="timeline" triangles={["left", "right"]} />
        </div>
      ))}
    </div>
  );
}

export default Timeline;