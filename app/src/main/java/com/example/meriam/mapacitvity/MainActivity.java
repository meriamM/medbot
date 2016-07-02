package com.example.meriam.mapacitvity;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {
    Context context;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_graph);
        context = getApplicationContext();
        Button goToGraph = (Button) findViewById(R.id.button);

        goToGraph.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View arg0) {

                Intent myIntent = new Intent(context, graphActivity.class);
                startActivity(myIntent);

            }

        });

    }
}

