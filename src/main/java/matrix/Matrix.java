package matrix;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.hibernate.annotations.OptimisticLockType;

import javax.persistence.*;
import java.io.IOException;
import java.util.Date;

/**
 * Created by Artyom on 01.01.2016.
 * Matrix POJO
 */
@Entity
@Table(name = "MATRICES")
@NamedQueries({
        @NamedQuery(name = "Matrix.getAll", query = "SELECT c from Matrix c ORDER BY c.id DESC"),
})
public class Matrix {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID")
    private int id;

    @Column(name = "ROWS")
    private int rows;

    @Column(name = "COLUMNS")
    private int columns;

    @Column(name = "DATE")
    private Date date;

    //@Column(name = "VALUES", unique = false, nullable = true, length = 1000)
    @Transient
    private int values[][];

    @Lob
    @Column(name = "MATRIXBLOB")
    private String valuesJSON;

    public Matrix(int rows, int columns, Date date, int[][] values) {
        this.setValues(values);
        this.rows = rows;
        this.columns = columns;
        this.date = date;
    }

    public Matrix() {
    }

    public int getRows() {
        return rows;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setRows(int rows) {
        this.rows = rows;
        this.values = new int[rows][this.getColumns()];
    }

    public int getColumns() {
        return columns;
    }

    public void setColumns(int columns) {
        this.columns = columns;
        this.values = new int[this.getRows()][columns];
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int[][] getValues() {
        if (this.values == null) {
            //update from JSON representation
            ObjectMapper mapper = new ObjectMapper();
            try {
                this.values = mapper.readValue(this.valuesJSON, int[][].class);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return this.values;
    }

    public void setValues(int[][] values) {
        //set values
        this.values = values;

        //update fields
        this.rows = values.length;
        this.columns = values[0].length;

        //update JSON representation
        String serialized = null;
        ObjectMapper mapper = new ObjectMapper();
        try {
            serialized = mapper.writeValueAsString(values);
            this.setValuesJSON(serialized);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

    }

    public String getValuesJSON() {
        return valuesJSON;
    }

    public void setValuesJSON(String valuesJSON) {
        this.valuesJSON = valuesJSON;
    }

    @Override
    public String toString() {
        String serialized = null;
        ObjectMapper mapper = new ObjectMapper();
        try {
            serialized = mapper.writeValueAsString(this);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return serialized;
    }
}
