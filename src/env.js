/**
 * @Author: benny
 * @Date: 2023-09-22 15:55:29
 * @LastEditTime: 2023-09-22 16:02:26
 * @LastEditors: benny
 * @Description:
 * @FilePath: \fanbook_mj_bot_clientd:\workspace\benny-utils\src\env.js
 * @版权声明
 */

const EnvUtils = {
  // 针对不同的环境增加不同的角标

  init: () => {
    // 回调的地址
    const { search } = window.location;
    if (search) {
      const params = new URLSearchParams(search);
    }
  },
};

export default EnvUtils;
