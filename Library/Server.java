import java.io.*;
import java.net.*;
import com.sun.net.httpserver.*;

public class Server {
    public static void main(String[] args) throws IOException {
        HttpServer server = HttpServer.create(new InetSocketAddress(8001), 0); // Listening on port 8001
        server.createContext("/save", new SaveHandler());
        server.setExecutor(null);
        server.start();
        System.out.println("Server started on port 8001");
    }

    static class SaveHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            if ("POST".equals(exchange.getRequestMethod())) {
                // Handle CORS preflight request
                exchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
                exchange.getResponseHeaders().add("Access-Control-Allow-Methods", "POST, OPTIONS");
                exchange.getResponseHeaders().add("Access-Control-Allow-Headers", "Content-Type");

                if ("OPTIONS".equals(exchange.getRequestMethod())) {
                    exchange.sendResponseHeaders(204, -1); // No Content for OPTIONS request
                    return;
                }

                InputStreamReader isr = new InputStreamReader(exchange.getRequestBody(), "utf-8");
                BufferedReader br = new BufferedReader(isr);
                StringBuilder sb = new StringBuilder();
                String line;
                while ((line = br.readLine()) != null) {
                    sb.append(line);
                }

                String requestBody = sb.toString();
                exchange.sendResponseHeaders(200, 0);
                OutputStream os = exchange.getResponseBody();
                os.write("Data received".getBytes());
                os.close();

                saveToFile(requestBody);
            }
        }

        private void saveToFile(String data) {
            try (FileWriter file = new FileWriter("./data.txt", true)) {
                file.write(data + "\n");
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
