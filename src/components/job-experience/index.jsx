import JobExperience from "./JobExperience";
import config from "../../config";

export default () => (
    <JobExperience items={config.workExperiences}/>
);