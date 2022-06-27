import { EmailIcon, NotificationIcon } from 'components/Icons';
import React from 'react';
import './AccountItem.scss';
import { Link } from 'react-router-dom';

const AccountItem: React.FC<{}> = () => {
    return (
        <div className="app__account-item">
            <EmailIcon className="app__account-item__email-icon" size={24} />
            <NotificationIcon className="app__account-item__notification-icon" size={24} />
            <Link className="app__account-item__account-avatar" to={'/dashboard'}>
                <img
                    src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-6/251374287_946849012708805_4517610628801416846_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VTEMJkIdurYAX-xRszK&_nc_ht=scontent.fsgn2-1.fna&oh=00_AT92KhV3AkFD1TjH7X8Qi9uW1h5o_VWW701fRMHgkx6LlA&oe=62BF58BD"
                    alt="Min Nhut"
                />
            </Link>
        </div>
    );
};

export default AccountItem;
