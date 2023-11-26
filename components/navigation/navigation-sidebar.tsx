import { currentProfile } from "@/lib/current-profile"
import { redirect } from "next/navigation";

export const NavigationSidebar = async () => {
    const profile = await currentProfile();
    if (!profile) {
        return redirect("/");
        
    }
    return (
        <div>
            Navigation Sidebar
        </div>
    )
}