(function(root){
 function collectRatingLine(line,wanted,entries){
  const [id,score,count]=line.trim().split('\t');
  if(!wanted.has(id)||!/^tt\d{5,12}$/.test(id)||!score||!count)return;
  const rating=Number(score),votes=Number(count);
  if(Number.isFinite(rating)&&rating>0&&rating<=10&&Number.isSafeInteger(votes)&&votes>0)
   entries[id]={rating,votes,source:'IMDb official dataset',sourceUrl:'https://www.imdb.com/title/'+id+'/',updatedAt:new Date().toISOString()};
 }
 if(typeof module==='object')module.exports={collectRatingLine};else root.collectRatingLine=collectRatingLine;
})(typeof self==='undefined'?this:self);
