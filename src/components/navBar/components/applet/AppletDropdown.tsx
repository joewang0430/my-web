"use client";

// 大屏幕模式下的 Applet 下拉菜单
const AppletDropdown = () => {
    return (
        <div className="absolute top-16 right-0 w-64 bg-wz-light-gray dark:bg-wz-classic-black border-2 border-wz-secondary-blue dark:border-wz-classic-green rounded-tl-lg rounded-bl-lg rounded-br-lg p-4 z-50">
            <h3 className="text-sm font-bold text-wz-main-color mb-3">Have some fun online!</h3>
            <div className="grid grid-cols-3 gap-3">
                {/* 占位符 - 之后会替换成实际的小程序图标 */}
                <div className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition-colors">
                    <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
                    <span className="text-xs mt-1 text-wz-text-color">App 1</span>
                </div>
                <div className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition-colors">
                    <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
                    <span className="text-xs mt-1 text-wz-text-color">App 2</span>
                </div>
                <div className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition-colors">
                    <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
                    <span className="text-xs mt-1 text-wz-text-color">App 3</span>
                </div>
            </div>
        </div>
    );
};

export default AppletDropdown;
