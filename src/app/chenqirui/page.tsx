import Image from "next/image";


export default function CQRPage() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="h-10"></div>
            <Image 
                src="/chenqirui.jpg"
                alt="Chen Qirui"
                width={200}
                height={200}
            />
            <div className="h-10"></div>
            <h2 className="text-md">陳祈睿 的 技能</h2>
            <h1 className="text-4xl">看穿一切</h1>
        </div>
    );
}