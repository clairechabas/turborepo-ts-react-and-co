import { Heading, SidebarInset, SidebarProvider } from '@base/ui';
import AppSidebarNav from './AppSidebarNav';
import AppSidebar from './AppSidebar';

export default function AppLayout(props: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar collapsible="dock" />
            <SidebarInset>
                <AppSidebarNav />
                <div className="p-4 lg:p-6">
                    <Heading>Basic</Heading>
                    {props.children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
