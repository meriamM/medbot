/*
This demo visualises wine and cheese pairings.
*/

$(function(){

  var layoutPadding = 50;
  var layoutDuration = 500;

  // get exported json from cytoscape desktop via ajax
  var graphP = {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.2.0",
  "target_cytoscapejs_version" : "~2.1",
  "data" : {
    "selected" : true,
    "__Annotations" : [ ],
    "shared_name" : "ArtWay",
    "SUID" : 52,
    "name" : "ArtWay"
  },
  "elements" : {
    "nodes" : [
    {
      "data" : {
        "id" : "441",
        "Strength" : 3,
        "selected" : false,
        "cytoscape_alias_list" : [ "Ma position" ],
        "canonicalName" : "Ma position",
        "Milk" : "Raw cow's milk",
        "Synonym" : "Kuentener",
        "Quality" : 90,
        "Type" : "Semi-soft",
        "SUID" : 441,
        "NodeType" : "Produits",
        "name" : "Ma position",
        "Country" : "Ma position",
        "shared_name" : "Ma position"
      },
      "position" : {
        "x" : 4091.9853515625,
        "y" : 4300.1904296875
      },
      "selected" : false
    },
    {
      "data" : {
        "id" : "442",
        "Strength" : 3,
        "selected" : false,
        "cytoscape_alias_list" : [ "Excursion" ],
        "canonicalName" : "Excursion",
        "Milk" : "Raw cow's milk",
        "Synonym" : "Kuentener",
        "Quality" : 90,
        "Type" : "Semi-soft",
        "SUID" : 441,
        "NodeType" : "Cider",
        "name" : "Excursion",
        "Country" : "Excursion",
        "shared_name" : "Excursion"
      },
      "position" : {
        "x" : 4591.9853515625,
        "y" : 4370.1904296875
      },
      "selected" : false
    },
    {
      "data" : {
        "id" : "443",
        "Strength" : 3,
        "selected" : false,
        "cytoscape_alias_list" : [ "Piscine" ],
        "canonicalName" : "Piscine",
        "Milk" : "Raw cow's milk",
        "Synonym" : "Kuentener",
        "Quality" : 90,
        "Type" : "Semi-soft",
        "SUID" : 441,
        "NodeType" : "Cider",
        "name" : "Piscine",
        "Country" : "Piscine",
        "shared_name" : "Piscine"
      },
      "position" : {
        "x" : 4091.9853515625,
        "y" : 4170.1904296875
      },
      "selected" : false
    },
    {
      "data" : {
        "id" : "444",
        "Strength" : 3,
        "selected" : false,
        "cytoscape_alias_list" : [ "SPA" ],
        "canonicalName" : "SPA",
        "Milk" : "Raw cow's milk",
        "Synonym" : "Kuentener",
        "Quality" : 90,
        "Type" : "Semi-soft",
        "SUID" : 441,
        "NodeType" : "Cider",
        "name" : "SPA",
        "Country" : "SPA",
        "shared_name" : "SPA"
      },
      "position" : {
        "x" : 4400.9853515625,
        "y" : 4470.1904296875
      },
      "selected" : false
    },
     {
      "data" : {
        "id" : "445",
        "Strength" : 3,
        "selected" : false,
        "cytoscape_alias_list" : [ "Excursion" ],
        "canonicalName" : "Rochechouart",
        "Milk" : "Raw cow's milk",
        "Synonym" : "Kuentener",
        "Quality" : 90,
        "Type" : "Semi-soft",
        "SUID" : 441,
        "NodeType" : "Cider",
        "name" : "Excursion",
        "Country" : "Excursion",
        "shared_name" : "Excursion"
      },

      "position" : {
        "x" : 4000.9853515625,
        "y" : 4500.1904296875
      },
      "selected" : false
    },
      {
      "data" : {
        "id" : "446",
        "Strength" : 3,
        "selected" : false,
        "cytoscape_alias_list" : [ "Concert Colisée Lens, Arnold Pol" ],
        "canonicalName" : "Concert Colisée Lens, Arnold Pol",
        "Milk" : "Raw cow's milk",
        "Synonym" : "Kuentener",
        "Quality" : 90,
        "Type" : "Semi-soft",
        "SUID" : 441,
        "NodeType" : "RedWine",
        "name" : "Concert Colisée Lens, Arnold Pol",
        "Country" : "Concert Colisée Lens, Arnold Pol",
        "shared_name" : "Concert Colisée Lens, Arnold Pol"
      },

      "position" : {
        "x" : 4100.9853515625,
        "y" : 4550.1904296875
      },
      "selected" : false
    },
      {
      "data" : {
        "id" : "447",
        "Strength" : 3,
        "selected" : false,
        "cytoscape_alias_list" : [ "Besoin Humain de Julien Bertrand " ],
        "canonicalName" : "Besoin Humain de Julien Bertrand ",
        "Milk" : "Raw cow's milk",
        "Synonym" : "Kuentener",
        "Quality" : 90,
        "Type" : "Semi-soft",
        "SUID" : 441,
        "NodeType" : "RedWine",
        "name" : "Besoin Humain de Julien Bertrand ",
        "Country" : "Besoin Humain de Julien Bertrand ",
        "shared_name" : "Besoin Humain de Julien Bertrand "
      },

      "position" : {
        "x" : 3909.9853515625,
        "y" : 4480.1904296875
      },
      "selected" : false
    },
      {
      "data" : {
        "id" : "448",
        "Strength" : 3,
        "selected" : false,
        "cytoscape_alias_list" : [ "Vernissage de Rubiant " ],
        "canonicalName" : "Vernissage de Rubiant ",
        "Milk" : "Raw cow's milk",
        "Synonym" : "Kuentener",
        "Quality" : 90,
        "Type" : "Semi-soft",
        "SUID" : 441,
        "NodeType" : "RedWine",
        "name" : "Vernissage de Rubiant ",
        "Country" : "Vernissage de Rubiant ",
        "shared_name" : "Vernissage de Rubiant "
      },

      "position" : {
        "x" : 4050.9853515625,
        "y" : 4550.1904296875
      },
      "selected" : false
    },
      {
      "data" : {
        "id" : "450",
        "Strength" : 3,
        "selected" : false,
        "cytoscape_alias_list" : [ "Théatre de la comapgnie des choses" ],
        "canonicalName" : "Théatre de la comapgnie des choses",
        "Milk" : "Raw cow's milk",
        "Synonym" : "Kuentener",
        "Quality" : 90,
        "Type" : "Semi-soft",
        "SUID" : 441,
        "NodeType" : "RedWine",
        "name" : "Théatre de la comapgnie des choses",
        "Country" : "Théatre de la comapgnie des choses",
        "shared_name" : "Théatre de la comapgnie des choses"
      }, 
      "position" : {
        "x" : 4120.9853515625,
        "y" : 4200.1904296875
      },
      "selected" : false
    },
      {
      "data" : {
        "id" : "451",
        "Strength" : 3,
        "selected" : false,
        "cytoscape_alias_list" : [ "Concert Helix Pulsar" ],
        "canonicalName" : "Concert Helix Pulsar",
        "Milk" : "Raw cow's milk",
        "Synonym" : "Kuentener",
        "Quality" : 90,
        "Type" : "Semi-soft",
        "SUID" : 441,
        "NodeType" : "RedWine",
        "name" : "Concert Helix Pulsar",
        "Country" : "RConcert Helix Pulsar",
        "shared_name" : "Concert Helix Pulsar"
      }, 
      "position" : {
        "x" : 4502.9853515625,
        "y" : 4320.1904296875
      },
      "selected" : false
    },
      {
      "data" : {
        "id" : "453",
        "Strength" : 3,
        "selected" : false,
        "cytoscape_alias_list" : [ "Jardin de pamplemousse" ],
        "canonicalName" : "Jardin de pamplemousse",
        "Milk" : "Raw cow's milk",
        "Synonym" : "Kuentener",
        "Quality" : 90,
        "Type" : "Semi-soft",
        "SUID" : 441,
        "NodeType" : "RedWine",
        "name" : "Jardin de pamplemousse",
        "Country" : "Jardin de pamplemousse",
        "shared_name" : "Jardin de pamplemousse"
      }, 
      "position" : {
        "x" : 4660.9853515625,
        "y" : 4300.1904296875
      },
      "selected" : false
    },
      {
      "data" : {
        "id" : "454",
        "Strength" : 3,
        "selected" : false,
        "cytoscape_alias_list" : [ "Piscine "],
        "canonicalName" : "Piscine ",
        "Milk" : "Raw cow's milk",
        "Synonym" : "Kuentener",
        "Quality" : 90,
        "Type" : "Semi-soft",
        "SUID" : 441,
        "NodeType" : "RedWine",
        "name" : "Piscine ",
        "Country" : "Piscine",
        "shared_name" : "Piscine"
      }, 
      "position" : {
        "x" : 4500.9853515625,
        "y" : 4550.1904296875
      },
      "selected" : false
    },
      {
      "data" : {
        "id" : "455",
        "Strength" : 3,
        "selected" : false,
        "cytoscape_alias_list" : [ "Playlist de Clément Lesaffre" ],
        "canonicalName" : "Playlist de Clément Lesaffre",
        "Milk" : "Raw cow's milk",
        "Synonym" : "Kuentener",
        "Quality" : 90,
        "Type" : "Semi-soft",
        "SUID" : 441,
        "NodeType" : "RedWine",
        "name" : "Playlist de Clément Lesaffre",
        "Country" : "Playlist de Clément Lesaffre",
        "shared_name" : "Playlist de Clément Lesaffre"
      }, 
      "position" : {
        "x" : 4430.9853515625,
        "y" : 4550.1904296875
      },
      "selected" : false
    },
      
    ],
    "edges" : [
    {
      "data" : {
        "id" : "1762",
        "source" : "441",
        "target" : "442",
        "selected" : false,
        "canonicalName" : "Aarauer Bierdeckel (cc) Bergues",
        "SUID" : 1762,
        "name" : "Aarauer Bierdeckel (cc) Bergues",
        "interaction" : "cc",
        "shared_interaction" : "cc",
        "shared_name" : "Aarauer Bierdeckel (cc) Bergues"
      },
      "selected" : false
    },
       {
      "data" : {
        "id" : "1763",
        "source" : "441",
        "target" : "443",
        "selected" : false,
        "canonicalName" : "Aarauer Bierdeckel (cc) Bergues",
        "SUID" : 1762,
        "name" : "Aarauer Bierdeckel (cc) Bergues",
        "interaction" : "cc",
        "shared_interaction" : "cc",
        "shared_name" : "Aarauer Bierdeckel (cc) Bergues"
      },
      "selected" : false
    },
       {
      "data" : {
        "id" : "1764",
        "source" : "441",
        "target" : "444",
        "selected" : false,
        "canonicalName" : "Aarauer Bierdeckel (cc) Bergues",
        "SUID" : 1762,
        "name" : "Aarauer Bierdeckel (cc) Bergues",
        "interaction" : "cc",
        "shared_interaction" : "cc",
        "shared_name" : "Aarauer Bierdeckel (cc) Bergues"
      },
      "selected" : false
    },
       {
      "data" : {
        "id" : "1765",
        "source" : "441",
        "target" : "445",
        "selected" : false,
        "canonicalName" : "Aarauer Bierdeckel (cc) Bergues",
        "SUID" : 1762,
        "name" : "Aarauer Bierdeckel (cc) Bergues",
        "interaction" : "cc",
        "shared_interaction" : "cc",
        "shared_name" : "Aarauer Bierdeckel (cc) Bergues"
      },
      "selected" : false
    },
       {
      "data" : {
        "id" : "1766",
        "source" : "445",
        "target" : "446",
        "selected" : false,
        "canonicalName" : "Aarauer Bierdeckel (cc) Bergues",
        "SUID" : 1762,
        "name" : "Aarauer Bierdeckel (cc) Bergues",
        "interaction" : "cc",
        "shared_interaction" : "cc",
        "shared_name" : "Aarauer Bierdeckel (cc) Bergues"
      },
      "selected" : false
    },
    {
      "data" : {
        "id" : "1767",
        "source" : "445",
        "target" : "447",
        "selected" : false,
        "canonicalName" : "Aarauer Bierdeckel (cc) Bergues",
        "SUID" : 1762,
        "name" : "Aarauer Bierdeckel (cc) Bergues",
        "interaction" : "cc",
        "shared_interaction" : "cc",
        "shared_name" : "Aarauer Bierdeckel (cc) Bergues"
      },
      "selected" : false
    },
    {
      "data" : {
        "id" : "1768",
        "source" : "445",
        "target" : "448",
        "selected" : false,
        "canonicalName" : "Aarauer Bierdeckel (cc) Bergues",
        "SUID" : 1762,
        "name" : "Aarauer Bierdeckel (cc) Bergues",
        "interaction" : "cc",
        "shared_interaction" : "cc",
        "shared_name" : "Aarauer Bierdeckel (cc) Bergues"
      },
      "selected" : false
    },
    {
      "data" : {
        "id" : "1769",
        "source" : "443",
        "target" : "449",
        "selected" : false,
        "canonicalName" : "Aarauer Bierdeckel (cc) Bergues",
        "SUID" : 1762,
        "name" : "Aarauer Bierdeckel (cc) Bergues",
        "interaction" : "cc",
        "shared_interaction" : "cc",
        "shared_name" : "Aarauer Bierdeckel (cc) Bergues"
      },
      "selected" : false
    },
    {
      "data" : {
        "id" : "1770",
        "source" : "443",
        "target" : "450",
        "selected" : false,
        "canonicalName" : "Aarauer Bierdeckel (cc) Bergues",
        "SUID" : 1762,
        "name" : "Aarauer Bierdeckel (cc) Bergues",
        "interaction" : "cc",
        "shared_interaction" : "cc",
        "shared_name" : "Aarauer Bierdeckel (cc) Bergues"
      },
      "selected" : false
    },
    {
      "data" : {
        "id" : "1771",
        "source" : "442",
        "target" : "451",
        "selected" : false,
        "canonicalName" : "Aarauer Bierdeckel (cc) Bergues",
        "SUID" : 1762,
        "name" : "Aarauer Bierdeckel (cc) Bergues",
        "interaction" : "cc",
        "shared_interaction" : "cc",
        "shared_name" : "Aarauer Bierdeckel (cc) Bergues"
      },
      "selected" : false
    },
    {
      "data" : {
        "id" : "1772",
        "source" : "442",
        "target" : "452",
        "selected" : false,
        "canonicalName" : "Aarauer Bierdeckel (cc) Bergues",
        "SUID" : 1762,
        "name" : "Aarauer Bierdeckel (cc) Bergues",
        "interaction" : "cc",
        "shared_interaction" : "cc",
        "shared_name" : "Aarauer Bierdeckel (cc) Bergues"
      },
      "selected" : false
    },
    {
      "data" : {
        "id" : "1773",
        "source" : "442",
        "target" : "453",
        "selected" : false,
        "canonicalName" : "Aarauer Bierdeckel (cc) Bergues",
        "SUID" : 1762,
        "name" : "Aarauer Bierdeckel (cc) Bergues",
        "interaction" : "cc",
        "shared_interaction" : "cc",
        "shared_name" : "Aarauer Bierdeckel (cc) Bergues"
      },
      "selected" : false
    },
    {
      "data" : {
        "id" : "1774",
        "source" : "444",
        "target" : "454",
        "selected" : false,
        "canonicalName" : "Aarauer Bierdeckel (cc) Bergues",
        "SUID" : 1762,
        "name" : "Aarauer Bierdeckel (cc) Bergues",
        "interaction" : "cc",
        "shared_interaction" : "cc",
        "shared_name" : "Aarauer Bierdeckel (cc) Bergues"
      },
      "selected" : false
    },
    {
      "data" : {
        "id" : "1775",
        "source" : "444",
        "target" : "455",
        "selected" : false,
        "canonicalName" : "Aarauer Bierdeckel (cc) Bergues",
        "SUID" : 1762,
        "name" : "Aarauer Bierdeckel (cc) Bergues",
        "interaction" : "cc",
        "shared_interaction" : "cc",
        "shared_name" : "Aarauer Bierdeckel (cc) Bergues"
      },
      "selected" : false
    },
    {
      "data" : {
        "id" : "1776",
        "source" : "455",
        "target" : "456",
        "selected" : false,
        "canonicalName" : "Aarauer Bierdeckel (cc) Bergues",
        "SUID" : 1762,
        "name" : "Aarauer Bierdeckel (cc) Bergues",
        "interaction" : "cc",
        "shared_interaction" : "cc",
        "shared_name" : "Aarauer Bierdeckel (cc) Bergues"
      },
      "selected" : false
    },
    {
      "data" : {
        "id" : "1777",
        "source" : "455",
        "target" : "456",
        "selected" : false,
        "canonicalName" : "Aarauer Bierdeckel (cc) Bergues",
        "SUID" : 1762,
        "name" : "Aarauer Bierdeckel (cc) Bergues",
        "interaction" : "cc",
        "shared_interaction" : "cc",
        "shared_name" : "Aarauer Bierdeckel (cc) Bergues"
      },
      "selected" : false
    },
    {
      "data" : {
        "id" : "1778",
        "source" : "455",
        "target" : "458",
        "selected" : false,
        "canonicalName" : "Aarauer Bierdeckel (cc) Bergues",
        "SUID" : 1762,
        "name" : "Aarauer Bierdeckel (cc) Bergues",
        "interaction" : "cc",
        "shared_interaction" : "cc",
        "shared_name" : "Aarauer Bierdeckel (cc) Bergues"
      },
      "selected" : false
    }
    ]
  }
};

  // also get style via ajax
  var styleP = $.ajax({
    url: 'style2.css', // wine-and-cheese-style.cycss
    type: 'GET',
    dataType: 'text'
  });
  
  var infoTemplate = Handlebars.compile([
    '<p class="ac-name">{{name}}</p>',
    '<p class="ac-node-type"><i class="fa fa-info-circle"></i> {{NodeTypeFormatted}} {{#if Type}}({{Type}}){{/if}}</p>',
    '{{#if Milk}}<p class="ac-milk"><i class="fa fa-angle-double-right"></i> {{Milk}}</p>{{/if}}',
    '{{#if Country}}<p class="ac-country"><i class="fa fa-map-marker"></i> {{Country}}</p>{{/if}}',
    '<p class="ac-more"><i class="fa fa-external-link"></i> <a target="_blank" href="https://duckduckgo.com/?q={{name}}">More information</a></p>'
  ].join(''));

  // when both graph export json and style loaded, init cy
  Promise.all([ graphP, styleP ]).then(initCy);

  function highlight( node ){
    var nhood = node.closedNeighborhood();

    cy.batch(function(){
      cy.elements().not( nhood ).removeClass('highlighted').addClass('faded');
      nhood.removeClass('faded').addClass('highlighted');
      
      var npos = node.position();
      var w = window.innerWidth;
      var h = window.innerHeight;
      
      cy.stop().animate({
        fit: {
          eles: cy.elements(),
          padding: layoutPadding
        }
      }, {
        duration: layoutDuration
      }).delay( layoutDuration, function(){
        nhood.layout({
          name: 'concentric',
          padding: layoutPadding,
          animate: true,
          animationDuration: layoutDuration,
          boundingBox: {
            x1: npos.x - w/2,
            x2: npos.x + w/2,
            y1: npos.y - w/2,
            y2: npos.y + w/2
          },
          fit: true,
          concentric: function( n ){
            if( node.id() === n.id() ){
              return 2;
            } else {
              return 1;
            }
          },
          levelWidth: function(){
            return 1;
          }
        });
      } );
      
    });
  }

  function clear(){
    cy.batch(function(){
      cy.$('.highlighted').forEach(function(n){
        n.animate({
          position: n.data('orgPos')
        });
      });
      
      cy.elements().removeClass('highlighted').removeClass('faded');
    });
  }

  function showNodeInfo( node ){

   /* $('#info').html( infoTemplate( node.data() ) ).show(); */
  }
  
  function hideNodeInfo(){
    $('#info').hide();
  }

  function initCy( then ){
    var loading = document.getElementById('loading');
    var expJson = then[0];
    var styleJson = then[1];
    var elements = expJson.elements;

    elements.nodes.forEach(function(n){
      var data = n.data;
      
      data.NodeTypeFormatted = data.NodeType;
      
      if( data.NodeTypeFormatted === 'Attributs' ){
        data.NodeTypeFormatted = 'Attributs';
      } else if( data.NodeTypeFormatted === 'Produits' ){
        data.NodeTypeFormatted = 'Produits';
      }
      
      n.data.orgPos = {
        x: n.position.x,
        y: n.position.y
      };
    });

    loading.classList.add('loaded');

    var cy = window.cy = cytoscape({
      container: document.getElementById('cy'),
      layout: { name: 'preset', padding: layoutPadding },
      style: styleJson,
      elements: elements,
      motionBlur: true,
      selectionType: 'single',
      boxSelectionEnabled: false
    });
    
    cy.on('free', 'node', function( e ){
      var n = e.cyTarget;
      var p = n.position();
      
      n.data('orgPos', {
        x: p.x,
        y: p.y
      });
    });
    
    cy.on('tap', function(){
      $('#search').blur();
    });

    cy.on('select', 'node', function(e){
      var node = this;
      highlight( node );
     
      if(node.data('NodeType') === 'RedWine'){
          
        window.location.href = "details.html";
      }
      showNodeInfo( node );
    });

    cy.on('unselect', 'node', function(e){
      var node = this;

      clear();
      hideNodeInfo();
    });

  }
  
  $('#search').typeahead({
    minLength: 2,
    highlight: true,
  },
  {
    name: 'search-dataset',
    source: function( query, cb ){
      function matches( str, q ){
        str = (str || '').toLowerCase();
        q = (q || '').toLowerCase();
        
        return str.match( q );
      }
      
      var fields = ['name', 'NodeType', 'Country', 'Type', 'Milk'];
      
      function anyFieldMatches( n ){
        for( var i = 0; i < fields.length; i++ ){
          var f = fields[i];
          
          if( matches( n.data(f), query ) ){
            return true;
          }
        }
        
        return false;
      }
      
      function getData(n){
        var data = n.data();
        
        return data;
      }
      
      function sortByName(n1, n2){
        if( n1.data('name') < n2.data('name') ){
          return -1;
        } else if( n1.data('name') > n2.data('name') ){
          return 1;
        }
        
        return 0;
      }
      
      var res = cy.nodes().stdFilter( anyFieldMatches ).sort( sortByName ).map( getData );
      
      cb( res );
    },
    templates: {
      suggestion: infoTemplate
    }
  }).on('typeahead:selected', function(e, entry, dataset){
    var n = cy.getElementById(entry.id);
    
    n.select();
    showNodeInfo( n );
  });
  
  $('#reset').on('click', function(){
    cy.animate({
      fit: {
        eles: cy.elements(),
        padding: layoutPadding
      },
      duration: layoutDuration
    });
  });
  
  $('#filters').on('click', 'input', function(){
    
    var soft = $('#soft').is(':checked');
    var semiSoft = $('#semi-soft').is(':checked');
    var na = $('#na').is(':checked');
    var semiHard = $('#semi-hard').is(':checked');
    var hard = $('#hard').is(':checked');
    
    var red = $('#red').is(':checked');
    var white = $('#white').is(':checked');
    var cider = $('#cider').is(':checked');
    
    cy.batch(function(){
      
      cy.nodes().forEach(function( n ){
        var type = n.data('NodeType');
        
        n.removeClass('filtered');
        
        var filter = function(){
          n.addClass('filtered');
        };
        
        if( type === 'Cheese' ){
          
          var cType = n.data('Type');
          
          if( 
               (cType === 'Soft' && !soft)
            || (cType === 'Semi-soft' && !semiSoft)
            || (cType === undefined && !na)
            || (cType === 'Semi-hard' && !semiHard)
            || (cType === 'Hard' && !hard)
          ){
            filter();
          }
          
        } else if( type === 'Attributs' ){
          
          if( !red ){ filter(); }
          
        } else if( type === 'Produits' ){
          
          if( !white ){ filter(); }
          
        } else if( type === 'Cider' ){
          
          if( !cider ){ filter(); }
          
        }
        
      });
      
    });
    
  });
  
  $('#filter').qtip({
    position: {
      my: 'top center',
      at: 'bottom center'
    },
    
    show: {
      event: 'click'
    },
    
    hide: {
      event: 'unfocus'
    },
    
    style: {
      classes: 'qtip-bootstrap',
      tip: {
        width: 16,
        height: 8
      }
    },

    content: $('#filters')
  });
});