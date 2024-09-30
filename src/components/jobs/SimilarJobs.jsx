function SimilarJobs() {
  return (
    <div className="border-t-[1px] border-t-lightGray pt-4 pb-2">
      <div className="flex gap-5 items-center">
        <img className="h-14 w-14 object-cover" src={arr.brandImage} alt="" />
        <div>
          <h5 className="pb-1">{arr.position}</h5>
          <div className="flex justify-between">
            <p className="text-sm">{arr.type}</p>
            <p className="text-sm">{arr.posted}</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm text-end pt-2">{arr.location}</p>
      </div>
    </div>
  );
}

export default SimilarJobs;
