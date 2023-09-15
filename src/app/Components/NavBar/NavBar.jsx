import Link from "next/link";
import NavbarTile from "./NavBarTile";

const NavBarItems = [
    {label:'DashBaord',path:'/user'},
    {label:'My Orders',path:'/user/orders'},
    {label:'My Products',path:'/myproducts'},
    {label:'Add New Product',path:'/addnewproduct'},

]
export default function Navbar() {
    return (
      <>
        <div className="d-flex flex-column justify-content-center h-100 ">
          {NavBarItems.map((item) => {
            return (
              <NavbarTile>
                <Link href={item.path}>{item.label}</Link>
              </NavbarTile>
            );
          })}
        </div>
      </>
    );
}