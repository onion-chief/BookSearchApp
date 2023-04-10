import styles from '../top.module.scss';

export const LoadingAnimation = () => {
    return (
        <div class={styles.loaders_container}>
            <div class={styles.container}>
                <div class={styles.circle}></div>
            </div>
        </div>
    );
}