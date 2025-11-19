import ButtonDocs from "./docs/ButtonDocs/ButtonDocs";
import InputDocs from "./docs/InputDocs/InputDocs";
import ModalDocs from "./docs/ModalDocs/ModalDocs";
import CardDocs from "./docs/CardDocs/CardDocs";
import ToastDocs from "./docs/ToastDocs";
import JazzieButtonDocs from './docs/JazzieButtonDocs';
import AvatarBadgeDocs from "./docs/AvatarBadgeDocs";
import ToggleDocs from "./docs/ToggleDocs";
import LoaderDocs from "./docs/LoaderDocs";
import TabDocs from "./docs/TabDocs";
import ThemeDocs from "./docs/ThemeDocs";
import PaginationDocs from "./docs/PaginationDocs";
import JazzieGridDocs from "./docs/JazzieGridDocs"

export const componentsData = [
  { 
    name: "Button", 
    component: <ButtonDocs />,
  },
  { 
    name: "Input Fields", 
    component: <InputDocs />, 
  },
  { 
    name: "Modal / Popup", 
    component: <ModalDocs />
  },
  { 
    name: "Card Component", 
    component: <CardDocs />
  },
  { 
    name: "Navbar & Footer", 
    description: "Responsive layout essentials" 
  },
  { 
    name: "Alert / Toast Message", 
    component: <ToastDocs /> 
  },
  { name: "Gradient Buttons", component: <JazzieButtonDocs /> },
{ name: "Avatar + Badge", component: <AvatarBadgeDocs /> },
{ name: "Soft Toggle Switch", component: <ToggleDocs /> },
{ name: "Skeleton Loader", component: <LoaderDocs /> },
{ name: "Tab Navigation", component: <TabDocs /> },
{ name: "Theme Switcher", component: <ThemeDocs /> },
// { name: "Form", component: <FormDocs /> },
{ name: "Pagination", component: <PaginationDocs /> },
{ name: "JazzieGrid", component: <JazzieGridDocs /> },
// { name: "JazzieTable", component: <JazzieTableDocs /> },
// { name: "Mini Dashboard Widget", component: <MiniWidgetDocs /> },
// { name: "Dashboard", component: <DashboardDocs /> },

];
