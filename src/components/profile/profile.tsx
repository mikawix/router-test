import classNames from 'classnames';
import styles from './profile.module.scss';

export interface ProfileProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Profile = ({ className }: ProfileProps) => {
    return <div className={classNames(styles.root, className)}>Profile</div>;
};
