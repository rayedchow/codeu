import { useRouter } from "next/router";

function Course() {
    const router = useRouter();
    const coursename = router.query.coursename;
    return <h1>Details about course {coursename}</h1>
}

export default Course;