import {
  CDBSidebar,
  CDBSidebarContent,
  //   CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

function Sidebar() {
  return (
    <div>
      <div style={{ height: '900px', overflow: 'scroll initial' }}>
        <CDBSidebar textColor="#fff" backgroundColor="#F48319" breakpoint={720} maxWidth="150px">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>Menu</a>
          </CDBSidebarHeader>

          <CDBSidebarContent className="sidebar-content pt-0">
            <CDBSidebarMenu>
              <a href='/' ><CDBSidebarMenuItem icon="home" >Index</CDBSidebarMenuItem></a>
              {/* <NavLink exact to="/" activeClassName="activeClicked">
                  </NavLink> */}
              <a href='/'><CDBSidebarMenuItem icon="calendar">Calendar</CDBSidebarMenuItem></a>
              {/* <NavLink exact to="/" activeClassName="activeClicked">
                  </NavLink> */}
              <a href='/'><CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem></a>
              {/* <NavLink exact to="/" activeClassName="activeClicked">
                  </NavLink> */}
            </CDBSidebarMenu>
          </CDBSidebarContent>

          {/* <CDBSidebarFooter style={{ textAlign: 'center' }}>
              <div
                  style={{
                  padding: '20px 5px',
                  }}
              >
                  Sidebar Footer
              </div>
              </CDBSidebarFooter> */}
        </CDBSidebar>
      </div>
    </div>
  );
}

export default Sidebar;
