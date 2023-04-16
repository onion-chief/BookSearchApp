import styles from '../top.module.scss';

export const LoadingAnimation = () => {
    return (
        <div className={styles.loaders_container}>
            <div className={styles.container}>
                <div className={styles.circle}></div>
            </div>
        </div>
    );
}