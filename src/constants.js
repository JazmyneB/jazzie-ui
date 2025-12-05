import ButtonDocs from "./docs/ButtonDocs/ButtonDocs.jsx";
import InputDocs from "./docs/InputDocs/InputDocs.jsx";
import ModalDocs from "./docs/ModalDocs/ModalDocs.jsx";
import CardDocs from "./docs/CardDocs/CardDocs.jsx";
import ToastDocs from "./docs/ToastDocs.jsx";
import JazzieButtonDocs from './docs/JazzieButtonDocs.jsx';
import AvatarBadgeDocs from "./docs/AvatarBadgeDocs.jsx";
import ToggleDocs from "./docs/ToggleDocs.jsx";
import LoaderDocs from "./docs/LoaderDocs.jsx";
import TabDocs from "./docs/TabDocs.jsx";
import ThemeDocs from "./docs/ThemeDocs.jsx";
import PaginationDocs from "./docs/PaginationDocs.jsx";
import JazzieGridDocs from "./docs/JazzieGridDocs.jsx";
import JazzieTableDocs from "./docs/JazzieTableDocs.jsx";
import WidgetDocs from "./docs/WidgetDocs.jsx";

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
{ name: "JazzieTable", component: <JazzieTableDocs /> },
{ name: "Mini Dashboard Widget", component: <WidgetDocs /> },
// { name: "Dashboard", component: <DashboardDocs /> },

];
