"use client";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

export const InitialModal = () => {
    return (
        <Dialog open={true}>
            <DialogContent className="bg-white text-black p-0 overflow-hidden">
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text-center font-bold">
                        Customize your server
                    </DialogTitle>
                    <DialogDescription>
                        Give your server a personality with a name and image. You can always change it later
                        
                    </DialogDescription>
                </DialogHeader>
        </DialogContent>
        </Dialog>
    )
}