token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImM2OWE1MWQyODA4MDZhOGFhYmJjOWYwZWM3NzY1YzNkZTM4NjU1YzI3NmUwMWExMjFkZTBkMjI4MTgwZGEzYjU4MjlmMjkyOTgzNDQ4NTlmIiwiaWF0IjoxNzQ5NDk5NDM0Ljg2MTI0MiwibmJmIjoxNzQ5NDk5NDM0Ljg2MTI0NSwiZXhwIjoxNzgxMDM1NDM0Ljg1NDIwNCwic3ViIjoiMjI1M3730giLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIiwidXNlci5pbmZvIl19.ofQyzfnkBA3BsPLAeHUmg_mfamwEKsk1vERRz_kXkCedmuE2up5lzkqeAVNQXWCPOlrexcE4G7qTDAvFre9DdMxoH74nmJEibitckaHuKXRNiyNvkXfTvjxj1wCYJ09Xj25-hMxYIwLOS7fp1iV5WXQXVhNjio28vhtLPuohOvAHdfmgJtA3kCIZfyJgKKeXbntfHV1UlxED-S_4v8X-fdszHeoW0Xlw1t-ofACkT7RcpBaWccILgJJfon6lSNHJGMlyT8M2oUZNmeexav4xagXQcWpmZ64yZIRqgq4N-uz0YSY9hDND-EH2U8IR5fNJOEPx0wsikkAayEuj2GnwNR0u_9ca6e1Agqlq1cQfrHwvtl4whTjdwluVkx_lqaRWXNDJO26-1JwZV9nIU0yekchq6ffaq5E8nXVxbnlKPaP7cL58iWVRrnmI848oIiYG2_a1ZdGem0pPl8XpunzOPaZHmOGJI8gLm66DcvVKsPWFMAPVvgTJ4qGoasXyJJtI3XVrvtXtJey2UR_Yg_vHbK8pfw-fsoeSLORMrZtdReW_iXsCNbbugpPm42Hlhz9GkutHFsQM7fVOHGkSmpK43IWztABjU1x7JoytBO-UPUgcCG62osweUZIfFjGJgR_ehmJ3wUha180vwELyg-I3-mfP7bvc3Y-SLBZQnvBb1SM';

async function fetchProducts() {
  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    data = await response.json();
    console.log('Products:', data);
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

// Run the function
fetchProducts();
