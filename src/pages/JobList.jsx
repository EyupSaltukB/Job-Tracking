import { useEffect } from "react"
import Card from "../components/Card"
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setError, setJobs } from "../redux/jobSlice";
import Filter from "../components/Filter";

const JobList = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store)

  useEffect(() => {
    axios.get('http://localhost:3040/jobs')
      .then((res) => dispatch(setJobs(res.data)))
      .catch((err) => dispatch(setError(err)));
  }, []);

  console.log(state)


  return (
    <div>
      <div className="list-page">
        <Filter/>
      </div>

      <h3 className="job-count">Bulunan ({state.mainJobs.length}) iş arasından ({''} {state.jobs.length}) işi görüntülüyorsunuz.</h3>
      <section className="list-section">
        {/* eğer API'dan cevap bekleniyorsa */}
        {
          !state.initialized && <p>Yükleniyor...</p>
        }

        {/* API'dan cevap geldiyse ve hata yok ise */}
        {
          state.initialized && !state.isError ? (
            <>
              {state.jobs.map((job) => (
                <Card key={job.id} job={job} />
              ))}
            </>
          ) : (
            <p>Üzgünüz, bir hata oluştu.</p>
          )}
      </section>
    </div>
  )
}

export default JobList;