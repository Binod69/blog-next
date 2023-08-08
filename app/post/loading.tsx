import styles from './loading.module.css';
const loading = () => {
  return (
    <>
      <div className={styles.skeletonImg}></div>
      <div className="content"></div>
    </>
  );
};

export default loading;
