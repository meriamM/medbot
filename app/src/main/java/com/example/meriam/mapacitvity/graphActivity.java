package com.example.meriam.mapacitvity;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class graphActivity extends AppCompatActivity {

    private WebView webView;

    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_graph);

        webView = (WebView) findViewById(R.id.webView1);
        webView.getSettings().setJavaScriptEnabled(true);
        webView.setWebViewClient(new WebViewClient());
        webView.loadUrl("http://eulerhermes.tk/gui/jquery/chat.php");
        /*webView.loadUrl("file:///android_asset/graph/index.html");
        webView.getSettings().setJavaScriptEnabled(true);*/
    /*        webView.loadUrl("file:///android_asset/jquery-1.8.2.js"); */


    }

}
