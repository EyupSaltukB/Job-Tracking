import { v4 } from "uuid";
import { statusOpt, typeOpt } from "../helpers/constants"
import axios from "axios";
import { useDispatch } from "react-redux";
import { addJob } from "../redux/jobSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const AddJob = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        // formData oluştuurma
        const form = new FormData(e.target);
        // formdaki değerlerden obje oluşturma
        const newJob = (Object.fromEntries(form.entries()));

        //  selectler seçildi mi kontrol etmek??
        if (!newJob.type || !newJob.status) {
            toast.info('Lütfen tüm alanları doldurun.')
            return;
        }
        // objeye ID ekleme (uuid ile)
        newJob.id = v4()

        // tarih ekleme
        newJob.date = new Date().toLocaleDateString()

        //! I. ADIM -> API'ya veri ekleme
        axios.post('http://localhost:3040/jobs', newJob)
            .then(() => {
                //! II. ADIM -> Store'u güncelle
                dispatch(addJob(newJob));

        // anasayfaya yönlendir
        navigate("/");
        // bildirim ver
        toast.success("İş Başarıyla Eklendi");
        })
        .catch(() => toast.error('Bir Hata Oluştu!'))
    };


    return (
        <div className="add-page">
            <div className="add-sec">
                <h2>Yeni İş Ekle +</h2>
                <form onSubmit={handleSubmit}>

                    <div>
                        <label>Pozisyon: </label>
                        <input required type="text" name="position" />
                    </div>

                    <div>
                        <label>Şirket: </label>
                        <input required type="text" name="company" />
                    </div>

                    <div>
                        <label>Konum: </label>
                        <input required type="text" name="location" />
                    </div>

                    <div>
                        <label>Durum: </label>
                        <select required name="status">
                            <option selected disabled>Seçiniz</option>
                            {statusOpt.map((opt, i) => (
                                <option key={i}>{opt}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label>Tür: </label>
                        <select required name="type">
                            <option selected disabled>Seçiniz</option>
                            {typeOpt.map((opt, i) => (
                                <option key={i}>{opt}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <button>Ekle</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddJob
