importScripts('./rating-parser.js');
self.onmessage=async({data:{file,ids}})=>{try{
 if(file.size>50000000)throw Error('请选择小于 50 MB 的官方评分文件');
 let stream=file.stream();if(file.name.endsWith('.gz'))stream=stream.pipeThrough(new DecompressionStream('gzip'));
 const reader=stream.pipeThrough(new TextDecoderStream()).getReader(),wanted=new Set(ids),entries={};let pending='',size=0;
 for(;;){const {value,done}=await reader.read();if(done)break;size+=value.length;if(size>150000000){await reader.cancel();throw Error('评分文件解压后过大');}const lines=(pending+value).split('\n');pending=lines.pop();for(const line of lines)collectRatingLine(line,wanted,entries);}
 collectRatingLine(pending,wanted,entries);self.postMessage({entries});
 }catch(error){self.postMessage({error:error.message});}};
