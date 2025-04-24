import React, { useState, useEffect } from 'react';

const FetchData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImFkMGExOWE0OWE0MTMzYzc1NjQwYjM0Y2I1MzYwMjkyNmM5MTdkOTU3ODZlYjg2NjdhZGMzYTAyNmM3OWZlOGU2OWE5MGJiNjFkMTEzZmY3IiwiaWF0IjoxNzQ1NTI0MjQyLjM2NzAxNSwibmJmIjoxNzQ1NTI0MjQyLjM2NzAxOCwiZXhwIjoxNzc3MDYwMjQyLjM0OTgxOCwic3ViIjoiMjI1MzczMDgiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cmlXRIsInByaW50X3Byb3ZpZGVycy5yZWFkIiwidXNlci5pbmZvIl19.JKTz_kNqpjXGoaXSFLXArHZhlYGS71Ji7svgNdtfaXcayYfpTbu0AXgchsi5sAvhlXmlvhARmRq8BmpY69mXOdGGytkphMCOjaM_eGLPWKjPJVM_yJ4L3dRX_39qSPcZgqqkZG8O721tRe1eY1dOxwIA2y4inzxiVCUJGprQTFnHlmv9dxTr-SAPAguJ3dYLKRMpd5k_0pf40RlMnugsd0hqPvB6iT0ZgQZIzv9fboQuEdFVoZgUF1YXP-Eu2M_Z6H0czM0vhN-r10PS75B6H3G589VQ-oLPlMCQVJ-vbPVHeb0B0b56v46nqIfiVNPG_-Lj79AogJ0n6SBWpfTepKsAzofvx1Ann09t4edDBSzDCn828bvIwZSkfUixBT1-EpfEB5fn-t-g0ouMqjSXp5oSgTHYCsav5HZ8UVNIMskBga5n7mmZsG6gLlnBX46DexIfD4vg5fp6YvjpW8ZXCjSdRba3xJBmcGnEsHHLZ_83LBPSPN58Rvexlc4w18n4d9aU_aCKL72Ld33EJ4m1vI34R_zMCFkPgDywKqpk24HnonG97gdpt3Kwmd9gA_UWBAPCkCW5_puMZUpYRWU8Jninpu7ybDZ7VqIU3clto3v57a-7J12zs0QcOV22CSQgHHwPCLkNpWWxDnSofY0t3uQT8TWKUrX8VJB1d4mF2Vc';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.printify.com/v1/shops', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center mt-8 text-mjrpro-dark">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">Error: {error}</div>;

  return (
    <div className="max-w-7xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-mjrpro-dark">Shops Data</h2>
      <pre className="bg-white p-4 rounded shadow">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};

export default FetchData;
