import React, {useState} from 'react';
import AdminSidebar from '../../../components/admin/Sidebar';
import CampaignTab from './CampaignTab';
import VoucherTab from './VoucherTab';
import '../css/AdminPromotion.css';

const PromotionManagement = () => {
    const [activeTab, setActiveTab] = useState('campaigns');

    return (<div className="admin-container">
            <AdminSidebar/>

            <main className="admin-main">
                <div className="admin-header">
                    <div>
                        <div className="breadcrumb">
                            <span>Quản trị hệ thống</span> / <span className="active">Quản lý giảm giá</span>
                        </div>
                    </div>
                </div>
                <div className="promo-top-tabs-nav">
                    <button
                        className={`top-tab-btn ${activeTab === 'campaigns' ? 'active' : ''}`}
                        onClick={() => setActiveTab('campaigns')}
                    >
                        Chương trình khuyến mãi
                    </button>
                    <button
                        className={`top-tab-btn ${activeTab === 'vouchers' ? 'active' : ''}`}
                        onClick={() => setActiveTab('vouchers')}
                    >
                        Quản lý Voucher
                    </button>
                </div>

                {activeTab === 'campaigns' ? <CampaignTab/> : <VoucherTab/>}
            </main>
        </div>);
};

export default PromotionManagement;