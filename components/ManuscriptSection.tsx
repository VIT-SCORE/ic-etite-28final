export default function ManuscriptSection() {
  return (
    <div className="px-8 md:px-16 py-8 shadow-xl bg-white">
      <h3 className="text-[#DE6D1B] text-2xl font-bold pb-2">Manuscript Submission</h3>
      <p className="text-sm text-gray-700 text-justify leading-relaxed">
        Papers should be submitted through the{" "}
        <a
          href="/call-for-papers#submit"
          className="text-blue-800 font-bold hover:underline"
        >
          Microsoft (CMT) submission portal
        </a>
        . All submitted papers will go through a plagiarism check process. The manuscript should not contain embedded links, scanned images, header or footer. Email submission will not be accepted. All queries related to the conference shall be addressed to{" "}
        <a href="mailto:icetiteconference@vit.ac.in" className="text-blue-800 font-bold hover:underline">
          icetiteconference@vit.ac.in
        </a>
        . Original contributions are solicited on topics covered under broad areas not restricted to Information Technology and Engineering.
      </p>
    </div>
  );
}
