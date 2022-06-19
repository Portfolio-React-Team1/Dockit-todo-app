import {
  CDBSidebar,
  CDBSidebarContent,
  //   CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';

  import './sidebar.css'
  
  function Sidebar() {
    return (
      <div className='index-container'>
          <div style={{ height: '100vh', overflow: 'scroll initial', margin:'0' , padding: '0' }}>
          <CDBSidebar textColor="#fff" backgroundColor="#F48319" breakpoint={720} maxWidth="150px">
              <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
              <a href="/home" className="text-decoration-none" style={{ color: 'inherit' }}>Menu</a>
              </CDBSidebarHeader>
  
              <CDBSidebarContent className="sidebar-content pt-0">
              <CDBSidebarMenu>
                  <a href='/index' ><CDBSidebarMenuItem icon="home" >Index</CDBSidebarMenuItem></a>
                  {/* <NavLink exact to="/" activeClassName="activeClicked">
                  </NavLink> */}
                  <a href='/categoryPage'><CDBSidebarMenuItem  icon="table">Category</CDBSidebarMenuItem></a>
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
