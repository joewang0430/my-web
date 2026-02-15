"use client";

// 小屏幕模式下的 Applet 下拉菜单（类似 RightMenuList 样式）
const AppletMenuList = () => {
    return (
        <div className="absolute top-16 right-0 bg-wz-classic-white dark:bg-wz-classic-black w-40 py-2 z-50">
            <div className="px-4 py-2 text-sm font-bold text-wz-main-color border-b border-gray-200 dark:border-gray-700">
                Applets
            </div>
            {/* 占位符 - 之后会替换成实际的小程序列表 */}
            <div className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors">
                <span className="text-sm text-wz-text-color hover:text-wz-secondary-blue dark:hover:text-wz-classic-green">
                    App 1
                </span>
            </div>
            <div className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors">
                <span className="text-sm text-wz-text-color hover:text-wz-secondary-blue dark:hover:text-wz-classic-green">
                    App 2
                </span>
            </div>
            <div className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors">
                <span className="text-sm text-wz-text-color hover:text-wz-secondary-blue dark:hover:text-wz-classic-green">
                    App 3
                </span>
            </div>
        </div>
    );
};

export default AppletMenuList;
