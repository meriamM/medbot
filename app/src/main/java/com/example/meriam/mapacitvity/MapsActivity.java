package com.example.meriam.mapacitvity;

import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.net.Uri;
import android.support.v4.app.FragmentActivity;
import android.os.Bundle;

import com.google.android.gms.maps.CameraUpdateFactory;
import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.OnMapReadyCallback;
import com.google.android.gms.maps.SupportMapFragment;
import com.google.android.gms.maps.model.BitmapDescriptorFactory;
import com.google.android.gms.maps.model.CameraPosition;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.model.LatLngBounds;
import com.google.android.gms.maps.model.Marker;
import com.google.android.gms.maps.model.MarkerOptions;

public class MapsActivity extends FragmentActivity implements OnMapReadyCallback {

    private GoogleMap mMap;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_maps);
        // Obtain the SupportMapFragment and get notified when the map is ready to be used.
        SupportMapFragment mapFragment = (SupportMapFragment) getSupportFragmentManager()
                .findFragmentById(R.id.map);
        mapFragment.getMapAsync(this);
    }


    /**
     * Manipulates the map once available.
     * This callback is triggered when the map is ready to be used.
     * This is where we can add markers or lines, add listeners or move the camera. In this case,
     * we just add a marker near Sydney, Australia.
     * If Google Play services is not installed on the device, the user will be prompted to install
     * it inside the SupportMapFragment. This method will only be triggered once the user has
     * installed Google Play services and returned to the app.
     */


    @Override
    public void onMapReady(GoogleMap googleMap) {
        mMap = googleMap;

        // Add a marker in Sydney and move the camera
        LatLng currentAddress = new LatLng(48.833553, 2.368554);
        LatLng currentAddress2 = new LatLng(48.841168, 2.236471);
        LatLng currentAddress3 = new LatLng(48.875773, 2.347860);
        LatLng currentAddress4 = new LatLng(48.889736, 2.241843);
        LatLng currentAddress5 = new LatLng(43.296482, 5.369780);
        LatLng currentAddress6 = new LatLng(43.710173, 7.261953);
        LatLng currentAddress7 = new LatLng(49.119309, 6.175716);
        LatLng currentAddress8 = new LatLng(48.692054, 6.184417);
        LatLng currentAddress9 = new LatLng(43.124228, 5.928000);
        LatLng currentAddress10 = new LatLng(47.218371, -1.553621);
        LatLng currentAddress11 = new LatLng(45.83361900000001, 1.2611050000000432);
        LatLng currentAddress12 = new LatLng(47.322047, 5.041479999999979);
        mMap.addMarker(new MarkerOptions().position(currentAddress).title("Marker").icon(BitmapDescriptorFactory.fromResource(R.mipmap.red)));
        mMap.addMarker(new MarkerOptions().position(currentAddress2).title("Marker").icon(BitmapDescriptorFactory.fromResource(R.mipmap.orange)));
        mMap.addMarker(new MarkerOptions().position(currentAddress3).title("Marker").icon(BitmapDescriptorFactory.fromResource(R.mipmap.green)));
        mMap.addMarker(new MarkerOptions().position(currentAddress4).title("Marker").icon(BitmapDescriptorFactory.fromResource(R.mipmap.red)));
        mMap.addMarker(new MarkerOptions().position(currentAddress5).title("Marker").icon(BitmapDescriptorFactory.fromResource(R.mipmap.orange)));
        mMap.addMarker(new MarkerOptions().position(currentAddress6).title("Marker").icon(BitmapDescriptorFactory.fromResource(R.mipmap.red)));
        mMap.addMarker(new MarkerOptions().position(currentAddress7).title("Marker").icon(BitmapDescriptorFactory.fromResource(R.mipmap.green)));
        mMap.addMarker(new MarkerOptions().position(currentAddress8).title("Marker").icon(BitmapDescriptorFactory.fromResource(R.mipmap.red)));
        mMap.addMarker(new MarkerOptions().position(currentAddress9).title("Marker").icon(BitmapDescriptorFactory.fromResource(R.mipmap.green)));
        mMap.addMarker(new MarkerOptions().position(currentAddress10).title("Marker").icon(BitmapDescriptorFactory.fromResource(R.mipmap.red)));
        mMap.addMarker(new MarkerOptions().position(currentAddress11).title("Marker").icon(BitmapDescriptorFactory.fromResource(R.mipmap.green)));
        mMap.addMarker(new MarkerOptions().position(currentAddress12).title("Marker").icon(BitmapDescriptorFactory.fromResource(R.mipmap.red)));



        //Marker click
        mMap.setOnMarkerClickListener(new GoogleMap.OnMarkerClickListener()
        {

            @Override
            public boolean onMarkerClick(Marker arg0) {
                    try {
                        Intent myIntent = new Intent(Intent.ACTION_VIEW, Uri.parse("http://dalkia.owebgo.com/admin/index/dalkia/"));
                        startActivity(myIntent);
                    } catch (ActivityNotFoundException e) {
                        /*Toast.makeText(this, "No application can handle this request."
                                + " Please install a webbrowser",  Toast.LENGTH_LONG).show(); */
                        e.printStackTrace();
                    }
                return true;
            }

        });
        mMap.moveCamera(CameraUpdateFactory.newLatLng(currentAddress));
      /*  mMap.setOnCameraChangeListener(new GoogleMap.OnCameraChangeListener() {
            @Override
            public void onCameraChange(CameraPosition arg0) {
                LatLng currentAddress = new LatLng(48.833553, 2.368554);
                LatLng currentAddress2 = new LatLng(48.834941, 2.368083);
                LatLng currentAddress3 = new LatLng(48.829824, 2.376751);
                LatLng currentAddress4 = new LatLng(48.827771, 2.350232);
                LatLng currentAddress5 = new LatLng(43.296482, 5.369780);
                LatLng currentAddress6 = new LatLng(43.710173, 7.261953);
                LatLng currentAddress7 = new LatLng(49.119309, 6.175716);
                LatLng currentAddress8 = new LatLng(48.692054, 6.184417);
                LatLng currentAddress9 = new LatLng(43.124228, 5.928000);
                LatLng currentAddress10 = new LatLng(47.218371, -1.553621);


                LatLngBounds.Builder boundsBuilder = new LatLngBounds.Builder();
                boundsBuilder.include(currentAddress);
                boundsBuilder.include(currentAddress2);
                boundsBuilder.include(currentAddress3);
                boundsBuilder.include(currentAddress4);
                boundsBuilder.include(currentAddress5);
                boundsBuilder.include(currentAddress6);
                boundsBuilder.include(currentAddress7);
                boundsBuilder.include(currentAddress8);
                boundsBuilder.include(currentAddress9);
                boundsBuilder.include(currentAddress10);
                LatLngBounds bounds = boundsBuilder.build();
                mMap.moveCamera(CameraUpdateFactory.newLatLngBounds(bounds, 0));
            }
        });
        */



    }


}
