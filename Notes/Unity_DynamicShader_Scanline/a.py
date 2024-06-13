import imageio

# 讀取 MP4 文件
video = imageio.get_reader('E:\\Documents\\IceWaterNotIce.github.io\\public\\Notes\\Unity_DynamicShader_Scanline\\Video.mp4')

# 獲取影片的幀數和尺寸
fps = video.get_meta_data()['fps']
size = video.get_meta_data()['size']

# 創建 GIF 寫入器
writer = imageio.get_writer('output.gif', mode='I', fps=fps, size=size)

# 遍歷影片的每一幀,並寫入 GIF
for i, frame in enumerate(video):
    writer.append_data(frame)

# 關閉寫入器和讀取器
writer.close()
video.close()