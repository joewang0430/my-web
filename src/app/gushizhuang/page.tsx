import Image from "next/image";


export default function CQRPage() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="h-10"></div>
            <Image 
                src="/gushizhuang.jpg"
                alt="Gu Shizhuang"
                width={200}
                height={200}
            />
            <div className="h-10"></div>
            <h2 className="text-md">顧士壯 的 技能</h2>
            <h1 className="text-4xl">直接拿捏</h1>
        </div>
    );
}