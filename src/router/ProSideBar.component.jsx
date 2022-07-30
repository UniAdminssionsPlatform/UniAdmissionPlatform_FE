import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Space, Typography } from 'antd';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import FlashOnRoundedIcon from '@mui/icons-material/FlashOnRounded';
import NewReleasesRoundedIcon from '@mui/icons-material/NewReleasesRounded';
const ProSideBarComponent = () => {
  const { Text, Title, Link } = Typography;
  return (
    <div className='z-11'>
      <ProSidebar>
        <SidebarHeader>
          <div
            style={{
              padding: '24px',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              fontSize: 14,
              letterSpacing: '1px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}>
            Uni PlatForm
          </div>
        </SidebarHeader>
        <Menu iconShape='circle'>
          <MenuItem icon={<HomeRoundedIcon />}>
            <Text strong>Trang chủ</Text>
          </MenuItem>
          <MenuItem icon={<StarBorderRoundedIcon />}>
            <Text strong>Sự kiện nổi bật</Text>
          </MenuItem>
          <MenuItem icon={<VerifiedRoundedIcon />}>
            <Text strong>Sự kiện trong ngày</Text>
          </MenuItem>
          <MenuItem icon={<FlashOnRoundedIcon />}>
            <Text strong>Sự kiện sắp diễn ra</Text>
          </MenuItem>
          <MenuItem icon={<FlashOnRoundedIcon />}>
            <Text strong>Tin tức mới nhất</Text>
          </MenuItem>
          <MenuItem icon={<NewReleasesRoundedIcon />}>
            <Text strong>Tin tức theo dõi</Text>
          </MenuItem>
        </Menu>
        <SidebarFooter>
          <div
            style={{
              padding: '24px',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              fontSize: 14,
              letterSpacing: '1px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}>
            <Space direction={'vertical'}>
              <Text>Thông tin thêm</Text>
              <Link>Liên lạc với chúng tôi</Link>
            </Space>
          </div>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
};
export default ProSideBarComponent;
