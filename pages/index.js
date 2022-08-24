import WeatherNow from "../components/WeatherNow";
import CEP from "../components/CEP";
import UploadFiles from "../components/UploadFiles";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <WeatherNow />
      <CEP />
      <UploadFiles />
    </div>
  );
}
